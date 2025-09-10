function getRandomNumber(): number {
    let n: number;
    const excludedPorts = [80, 443, 3306, 21, 14147];
    
    do {
        n = Math.floor(Math.random() * 65535) + 1;
    } while (excludedPorts.includes(n));

    return n;
}

console.log(getRandomNumber());
