if [["$VERCEL_GIT_COMMIT_REF" != "main"]] ; then
    echo "Build failed"
    exit 1;
else 
    echo "Build can process"
    exit 0;
fi