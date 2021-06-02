aws s3 sync . s3://owenstovall.com --exclude ".git/*"
aws cloudfront create-invalidation \
    --distribution-id EWNOFBY5BB0FZ \
    --paths "/*" \
