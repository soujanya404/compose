# Use the official Nginx image
FROM nginx:latest

# Copy the content of the "src" directory to Nginx's HTML directory
COPY src /usr/share/nginx/html

# Expose port 80
EXPOSE 80 