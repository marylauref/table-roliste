SHELL=bash
SOURCE_DIR = $(shell pwd)
COMPOSER_DIR = ${SOURCE_DIR}/composer
COMPOSER_BIN := $(shell type -P composer2)

PHP = $($(CURRENT_EXEC_PHP))

# Coding Style
cs:
	vendor/bin/php-cs-fixer fix --dry-run --stop-on-violation --diff

cs-fix:
	vendor/bin/php-cs-fixer fix --config=.php-cs-fixer.dist.php --diff --allow-risky=yes

.PHONY: phpstan
phpstan:
	vendor/bin/phpstan.phar analyse --memory-limit=1G

rector: ## Code refactoring
	$(PHP) vendor/bin/rector process
