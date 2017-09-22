Timestamp Microservice
=========================

User stories:
* I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
* If it does, it returns both the Unix timestamp and the natural language form of that date.
* If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example usage:
`https://flannel-texture.glitch.me/September%2015,%202017`

`https://flannel-texture.glitch.me/1505495746`

### Example output:
`{ "unix": 1505495746, "natural": "September 15, 2017" }`
