main.out:
	gcc -S main.c -fstack-protector
	gcc main.c -o main.out -fstack-protector

clean:
	rm main.out main.s

run:
	./main.out