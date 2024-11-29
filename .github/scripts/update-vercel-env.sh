#!/bin/bash

set -e  # Sai imediatamente em caso de erro

# Recebendo os parâmetros
SECRETS_JSON=$1
ENVIRONMENT=$2
TOKEN=$3

# Função para processar os secrets
update_env_vars() {
  echo "Updating environment variables for environment: $ENVIRONMENT"

  # Variáveis que queremos excluir
  exclude_vars=(
    "VERCEL_DOMAIN_PROJECT_PROD"
    "VERCEL_DOMAIN_PROJECT_STAGE"
    "VERCEL_ORG_ID"
    "VERCEL_PROJECT_ID"
    "VERCEL_TOKEN"
    "github_token"
  )

  # Filtro jq para excluir variáveis indesejadas
  jq_filter=$(printf 'select(.key != "%s") | ' "${exclude_vars[@]}")
  jq_filter="${jq_filter::-3}"  # Remove o último ' | '

  # Itera sobre cada par chave-valor no JSON
  echo "$SECRETS_JSON" | jq -r "to_entries | map($jq_filter) | map(\"\(.key)=\(.value)\") | .[]" | while IFS= read -r VAR; do
    # Extrai chave e valor
    VARIABLE_NAME=$(echo "$VAR" | cut -d '=' -f 1)
    VALUE=$(echo "$VAR" | cut -d '=' -f 2-)

    echo "Processing variable: $VARIABLE_NAME"

    # Remove a variável existente
    vercel env rm "$VARIABLE_NAME" "$ENVIRONMENT" --yes --token="$TOKEN" || echo "Variable $VARIABLE_NAME does not exist, skipping removal."

    # Adiciona a nova variável
    echo "$VALUE" | vercel env add "$VARIABLE_NAME" "$ENVIRONMENT" --token="$TOKEN"

    echo "Updated variable: $VARIABLE_NAME"
  done

  echo "Environment variables updated successfully!"
}

# Chama a função
update_env_vars
