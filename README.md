# Character Soup

## Generates sequential brute-forced text.

A soup of characters. :tomato::corn::stew::cake:

### Supporting different languages:

- [x] JavaScript
- [x] TypeScript
- [x] Python
- [ ] C#
- [ ] Java
- [ ] C++

#### :clock1: Benchmarking in development.

## How does it work?

```javascript
// Set the maximum text length:
const MAX_LENGTH = 4;

// Set the characters to be used:
const CHARACTERS = "0123456789";

// Create an array of all combinations,
// Total of c^(n!), c = |CHARACTERS|, n = |MAX_LENGTH|
// For example: ["0", "1", "2", ... , "9997", "9998", "9999"];
```

### What is character soup for?

Originally, this was one of the earlies pieces of software I wrote, in Visual Basic.
To illustrate how quickly it is to run through all 4-digit PIN codes.
:no_entry_sign: :lock: :key: :unlock: :heavy_check_mark:

Now, password systems are properly protected with reCAPTCHA, multi-factor authentication, password-entry limits and more.
It is still interesting to show how quickly a password can be brute-forced.

#### [Hive Systems](https://www.hivesystems.io/) have a great cybersecurity infographic for this system.

![Brute force time. Credit to Hive Systems](https://user-images.githubusercontent.com/53222142/203083902-36696cc8-f3bb-4b23-9a42-643856ac5125.png)

#### Remember to celebrate [World Password Day](https://nationaltoday.com/world-password-day/) on the first Thursday of May. :calendar:

#### Keep your accounts safe. Ensure that:

- :lock: Your passwords are unique across all services.
- :lock: Your passwords aren't all "password".
- :lock: You are using multi-factor authentication where possible.
- :closed_lock_with_key: Avoid [publishing API credentials](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-3_Meli_paper.pdf), especially keys, to public repositories.

<details><summary>correcthorsebatterystaple</summary>

![correcthorsebatterystaple. Credit to XKCD](https://imgs.xkcd.com/comics/password_strength.png)

There is an [XKCD for everything](https://xkcd.com/936/ "There is an XKCD comic for everything").

</details>
