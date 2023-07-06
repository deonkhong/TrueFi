Follow this to install Rust on Linux
https://docs.substrate.io/install/linux/

Use version 1.69 and set it to default 
(Issue with 1.7.0 https://substrate.stackexchange.com/questions/7881/error-loading-of-original-wasm-failed)

installing rust 1.69 and cargo-contract CLI:

	rustup update stable
 
	rustup install 1.69
 
	rustup default 1.69
 
	rustup component add rust-src --toolchain 1.69
 
	rustup target add wasm32-unknown-unknown --toolchain 1.69

	cargo install --force --locked cargo-contract --version 2.0.0-rc
 
	cargo contract build

Verify:
	cargo contract --help
	
	
Then follow this doc https://docs.substrate.io/tutorials/smart-contracts/prepare-your-first-contract/

when u reach this part "cargo install --force --locked cargo-contract --version 2.0.0-rc"

	just type:	 cargo install --force --locked cargo-contract
