// Product data
const products = [
    {
        id: 1,
        name: "Luminous Foundation",
        brand: "maybelline",
        category: "face",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1590422749897-47af63fdcf0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 2,
        name: "Matte Lipstick",
        brand: "loreal",
        category: "lips",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 3,
        name: "Volumizing Mascara",
        brand: "maybelline",
        category: "eyes",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1631214524020-3c8b8e5dd02d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 4,
        name: "Hydrating Serum",
        brand: "neutrogena",
        category: "skincare",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 5,
        name: "Eyeshadow Palette",
        brand: "nyx",
        category: "eyes",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1583241800698-e8ab01c85b27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 6,
        name: "Facial Cleanser",
        brand: "neutrogena",
        category: "skincare",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 7,
        name: "Liquid Eyeliner",
        brand: "revlon",
        category: "eyes",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 8,
        name: "Moisturizing Cream",
        brand: "loreal",
        category: "skincare",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1611080541599-8c6dbde6ed1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 9,
        name: "Blush Palette",
        brand: "nyx",
        category: "face",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1596704017254-9759879d8e87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 10,
        name: "Lip Gloss Set",
        brand: "revlon",
        category: "lips",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 11,
        name: "Perfume No. 5",
        brand: "chanel",
        category: "perfume",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
        id: 12,
        name: "SPF 50 Sunscreen",
        brand: "neutrogena",
        category: "sunscreen",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1624984673683-901a2f0a902d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
];