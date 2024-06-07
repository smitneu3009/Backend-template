# Use the official MySQL image from Docker Hub
FROM mysql:5.7

# Set environment variables for MySQL configuration
ENV MYSQL_ROOT_PASSWORD=admin
ENV MYSQL_DATABASE=practice

# Expose the default MySQL port
EXPOSE 3306

# Start MySQL service automatically when the container starts
CMD ["mysqld"]
