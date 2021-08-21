
// * memory prices
function getMemoryPrice(Memory) {
    document.getElementById('memory-base-cost').innerText = Memory;
    // return NormalMemoryPrice;
    getAll()
};

// * memory
document.getElementById('simple-memory-price-btn').addEventListener('click', function () {
    getMemoryPrice(0);
});


document.getElementById('extra-memory-price-btn').addEventListener('click', function () {
    getMemoryPrice(180);
});



// * storage prices
function storagePrice(storage) {
    document.getElementById('storage-base-cost').innerText = storage;
    // return NormalStoragePrice;
    getAll();
};

/* storage */
document.getElementById('simple-storage-price-btn').addEventListener('click', function () {
    storagePrice(0);
});

document.getElementById('medium-storage-price-btn').addEventListener('click', function () {
    storagePrice(100);
});

document.getElementById('larger-storage-price-btn').addEventListener('click', function () {
    storagePrice(180);
});



// * extra delivery
function extraDelivery(delivery) {
    document.getElementById('delivery-time-base-cost').innerText = delivery;
    // return OriginalDeliveryCost;
    getAll();
};


/* delivery time base price */
document.getElementById('original-delivery-btn').addEventListener('click', function () {
    extraDelivery(0);
});

document.getElementById('fast-delivery-btn').addEventListener('click', function () {
    extraDelivery(20);
});




function getAll() {
    const memoryBase = document.getElementById('memory-base-cost');
    const storageBase = document.getElementById('storage-base-cost');
    const deliveryTimeBase = document.getElementById('delivery-time-base-cost');
    const bestPrice = document.getElementById('best-price');
    const totalPrices = parseInt(bestPrice.innerText) + parseInt(memoryBase.innerText) + parseInt(storageBase.innerText) + parseInt(deliveryTimeBase.innerText);
    document.getElementById('total-price').innerText = totalPrices;
    document.getElementById('total').innerText = totalPrices;

};


document.getElementById('cupon-btn').addEventListener('click', function () {
    const couponInput = document.getElementById('cupon-input');
    const totalPriceCoupon = document.getElementById('total');
    if (couponInput.value == 'stevekaku') {
        const discount = (totalPriceCoupon.innerText * 20) / 100;
        console.log(discount);
        totalPriceCoupon.innerText = parseInt(totalPriceCoupon.innerText) - discount;
    }
    couponInput.value = '';
});


