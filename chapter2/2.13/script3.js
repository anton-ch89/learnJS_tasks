'use strict';



next: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue next;
    }
    alert(i)
}
