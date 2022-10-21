terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
  required_version = ">= 0.14.9"
}

provider "aws" {
  profile = "default"
  region  = "us-west-2"
}

resource "aws_instance" "app_server" {
  ami           = "ami-03d5c68bab01f349"
  instance_type = "t2.micro"
  key_name      = "mykey"
  user_data     = <<-EOF
  #!/bin/bash
  cd /home/ubuntu
  echo "Hello World" > index.html
  nohup busybox httpd -f -p 8080 &
  EOF

  tags = {
    Name = "Teste Aws"
  }
}
