main.wat:	main.wasm
	wasm2wat main.wasm -o main.wat

main.wasm:
	clang --target=wasm32 --no-standard-libraries -Wl,--export-all -Wl,--no-entry -o main.wasm main.c

clean:
	rm main.wat main.wasm

run:
	./wasm3-cosmopolitan.com --repl ./main.wasm

check:
	wasm-objdump -x main.wasm