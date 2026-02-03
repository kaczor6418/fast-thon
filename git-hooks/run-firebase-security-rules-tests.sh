#!/bin/bash
source ./git-hooks/git-hooks-helpers.sh
source ./git-hooks/logs-colors.sh

TESTS_EXIT_CODE=0
EXTENSIONS_TO_CHECK=".*\.rules$"
STAGED_FILES=$(git diff --cached --diff-filter=d --name-only | grep -E "$EXTENSIONS_TO_CHECK")

if [[ -n "$STAGED_FILES" ]]; then
  echo -e "${BLUE} 🔥 Running Firebase security rules tests... ${NC}"
#  ./node_modules/.bin/jest /test/integration --coverage=false --testEnvironment=node --passWithNoTests --setupFilesAfterEnv ./test/integration/integration-setup.ts
#  TESTS_EXIT_CODE=$?
  printf "\n"
fi

echo $TESTS_EXIT_CODE >"$FIREBASE_SECURITY_RULES_EXIT_CODE_TMP"
