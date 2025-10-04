export function getImageUrl(person, size = 'b') {
    if (person.imageUrl && person.imageUrl.length > 0) {
      return person.imageUrl;
    }
  
    const placeholderImages = {
      'szV5sdG': 'https://i.imgur.com/szV5sdGb.jpg',
      'YfeOqp2': 'https://i.imgur.com/YfeOqp2b.jpg'
    };
  
    if (person.imageId && placeholderImages[person.imageId]) {
      return placeholderImages[person.imageId];
    }
  
    const width = 400;
    const height = 400;
    const nameForPlaceholder = encodeURIComponent(person.name || 'persona');
    return `https://via.placeholder.com/${width}x${height}.png?text=${nameForPlaceholder}`;
  }
  