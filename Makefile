hello:
	echo "Hello"

run:
	hugo --cleanDestinationDir
	cd process; go build main.go
	process/main