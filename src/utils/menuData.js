export const menuCategories = [
  {
    id: 'coffee',
    label: 'Coffee',
    items: [
      { id: 1, name: 'Classic Espresso', description: 'Double shot of our signature single-origin espresso, rich crema finish.', price: '₹280', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80', veg: false },
      { id: 2, name: 'Vanilla Latte', description: 'Smooth espresso with steamed milk and house-made vanilla syrup.', price: '₹350', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&q=80', veg: true },
      { id: 3, name: 'Mocha Delight', description: 'Rich chocolate meets bold espresso, topped with whipped cream.', price: '₹390', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400&q=80', veg: true },
      { id: 4, name: 'Flat White', description: 'Double ristretto with velvety microfoam for a bold yet smooth taste.', price: '₹320', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80', veg: true },
      { id: 5, name: 'Irish Coffee', description: 'Classic coffee with a kick of Irish whiskey and cream.', price: '₹450', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&q=80', veg: false },
      { id: 6, name: 'Spanish Latte', description: 'Sweetened condensed milk meets double espresso for a creamy indulgence.', price: '₹370', image: 'https://images.unsplash.com/photo-1529892485617-25b63ba7c3f6?w=400&q=80', veg: true },
    ],
  },
  {
    id: 'tea',
    label: 'Tea',
    items: [
      { id: 7, name: 'Matcha Latte', description: 'Premium Japanese matcha whisked with steamed oat milk.', price: '₹380', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80', veg: true },
      { id: 8, name: 'Chai Masala', description: 'Traditional spiced tea brewed with cardamom, ginger, and cinnamon.', price: '₹250', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80', veg: true },
      { id: 9, name: 'Earl Grey Lavender', description: 'Bergamot-infused black tea with calming lavender notes.', price: '₹290', image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=80', veg: true },
      { id: 10, name: 'Iced Peach Tea', description: 'Chilled black tea blended with natural peach syrup and mint.', price: '₹270', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80', veg: true },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { id: 11, name: 'Tiramisu', description: 'Classic Italian layers of espresso-soaked sponge and mascarpone cream.', price: '₹420', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80', veg: true },
      { id: 12, name: 'Chocolate Lava Cake', description: 'Warm dark chocolate cake with a molten centre, served with vanilla gelato.', price: '₹480', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&q=80', veg: true },
      { id: 13, name: 'Cheesecake', description: 'New York style baked cheesecake with a berry compote drizzle.', price: '₹390', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80', veg: true },
    ],
  },
  {
    id: 'breakfast',
    label: 'Breakfast',
    items: [
      { id: 15, name: 'Avocado Toast', description: 'Sourdough topped with smashed avocado, cherry tomatoes, and poached egg.', price: '₹380', image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80', veg: true },
      { id: 16, name: 'Pancake Stack', description: 'Fluffy buttermilk pancakes with maple syrup, berries, and whipped butter.', price: '₹420', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80', veg: true },
      { id: 17, name: 'English Breakfast', description: 'Eggs, bacon, sausage, grilled tomato, mushrooms, and toast.', price: '₹520', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&q=80', veg: false },
      { id: 18, name: 'Acai Bowl', description: 'Blended acai with granola, banana, coconut flakes, and honey drizzle.', price: '₹350', image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=80', veg: true },
    ],
  },
  {
    id: 'sandwiches',
    label: 'Sandwiches',
    items: [
      { id: 19, name: 'Grilled Chicken Panini', description: 'Herb-marinated chicken, mozzarella, roasted peppers in ciabatta.', price: '₹450', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80', veg: false },
      { id: 20, name: 'Caprese Sandwich', description: 'Fresh mozzarella, tomato, basil, and balsamic glaze on focaccia.', price: '₹380', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', veg: true },
      { id: 22, name: 'Veggie Wrap', description: 'Hummus, roasted vegetables, spinach, and feta in a whole wheat wrap.', price: '₹340', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80', veg: true },
    ],
  },
];

export const todaysSpecial = {
  name: 'Smoked Caramel Macchiato',
  description: 'Our signature layered masterpiece — bold espresso meets house-made smoked caramel sauce, topped with velvety steamed milk and a delicate crosshatch of caramel drizzle. Finished with a pinch of sea salt.',
  price: '₹490',
  image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=1200&q=80',
};
