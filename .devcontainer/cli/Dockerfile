# From official php image.
FROM php:8.3-cli-alpine
# Create a user group and account under id 1000.
RUN addgroup -g 1000 -S user && adduser -u 1000 -D user -G user
# Install quality-of-life packages.
RUN apk add --no-cache bash curl git vim
# Install composer for php deps.
RUN apk add --no-cache composer
# Composer uses its php binary, but we want it to use the container's one
RUN rm -f /usr/bin/php83
RUN ln -s /usr/local/bin/php /usr/bin/php83
# Install mysql pdo driver.
RUN apk add --no-cache mysql-dev && docker-php-ext-install pdo_mysql

# install extensions using apk
RUN apk add --no-cache libzip-dev && docker-php-ext-install zip
RUN apk add --no-cache icu-dev \
    && docker-php-ext-configure intl \
    && docker-php-ext-install intl

# install mysql client
RUN apk add --no-cache mysql-client


# Install nodejs and npm for frontend.
RUN apk add --no-cache nodejs npm
# Prevent container from exiting early.
CMD ["sleep", "infinity"]
