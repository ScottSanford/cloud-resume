version = 0.1
[y]
[y.deploy]
[y.deploy.parameters]
stack_name = "sam-app-2"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-j9zd757yj27l"
s3_prefix = "sam-app"
region = "us-east-1"
profile = "iamadmin-general"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"
disable_rollback = true
image_repositories = []
