FROM node:16-alpine

WORKDIR /usr/src/app

COPY yarn.lock ./

# Install dependencies using Yarn.
RUN yarn install

# Copy the rest of the application files.
COPY . .

# Build the NestJS application.
RUN yarn build

# Expose the port the app runs on.
EXPOSE 3030

# Run the application.
CMD ["yarn", "start:prod"]