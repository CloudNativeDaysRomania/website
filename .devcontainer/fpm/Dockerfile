# From official php image.
FROM php:8.3-fpm-alpine
# Install mysql pdo driver.
RUN apk add --no-cache mysql-dev && docker-php-ext-install pdo_mysql

# Install redis driver.
RUN mkdir -p /usr/src/php/ext/redis; \
    curl -fsSL --ipv4 https://github.com/phpredis/phpredis/archive/6.0.2.tar.gz | tar xvz -C "/usr/src/php/ext/redis" --strip 1; \
    docker-php-ext-install redis

# include PHP Redis extension
RUN docker-php-ext-enable redis