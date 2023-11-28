# Use an official Node runtime as a parent image
FROM node:18-alpine

# set working directory
WORKDIR /app

# add app
COPY . .

RUN npm install
RUN npm install react-scripts@5.0.1 -g

CMD ["npm", "start"]

EXPOSE 3000