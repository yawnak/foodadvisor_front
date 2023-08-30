#!/bin/bash

# Update the system
sudo yum update -y

# Install Docker and Git
sudo yum install -y docker
sudo yum install -y git

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Check if user is a member of the 'docker' group
if ! groups | grep -q '\bdocker\b'; then
    echo "User is not a member of the 'docker' group."
    sudo usermod -aG docker "$(whoami)"
    echo "Added user to the 'docker' group."
    echo "Rebooting the system..."
    sudo reboot
else
    echo "User is already a member of the 'docker' group. No action required."
fi

# Start and enable Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Clone the repository and start Docker Compose
git clone https://github.com/yawnak/foodadvisor_front.git
cd foodadvisor_front
git pull origin main
docker-compose up -d
