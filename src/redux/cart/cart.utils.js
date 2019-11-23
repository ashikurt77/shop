export const checkItem = (existingItems, itemToAdd) => {
  const doesExist = existingItems.find(item => item.id === itemToAdd.id);

  if (doesExist) {
    return existingItems.map(item =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...existingItems, { ...itemToAdd, quantity: 1 }];
};
