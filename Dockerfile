# Dockerfile for E-commerce Store
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Start the app
CMD ["npm", "run" , "dev"]
