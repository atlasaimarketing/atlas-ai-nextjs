import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'yg2mmobl',
  dataset: 'production',
  token: 'skuzGiBPmHXvUofZOxqfE7HJEgIczT1FTmP5dKL2hBYB7o3Z0mgFIW6u4s5heGAcgStjUdV2mFXAoprfahEmIqqkGvCKRqJ4PvbGGzt7EeT2oCipjEZaazGAmmnbQ3AvFU34BerhVAtKne8aw9EpzUMTWgVV0m2h2OjgJKNq46JHU7hiWXcl',
  useCdn: false,
  apiVersion: '2024-01-01'
});

// Function to convert markdown text to Portable Text blocks
function markdownToPortableText(markdown) {
  const blocks = [];
  const lines = markdown.split('\n\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    
    // Check if it's a heading
    if (trimmed.startsWith('## ')) {
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'h2',
        children: [
          {
            _type: 'span',
            text: trimmed.replace(/^##\s*/, ''),
            marks: []
          }
        ]
      });
    } else if (trimmed.startsWith('### ')) {
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'h3',
        children: [
          {
            _type: 'span',
            text: trimmed.replace(/^###\s*/, ''),
            marks: []
          }
        ]
      });
    } else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      // Handle list items
      const listItems = trimmed.split('\n').filter(l => l.trim().startsWith('-') || l.trim().startsWith('*'));
      for (const item of listItems) {
        const text = item.replace(/^[-*]\s*/, '');
        blocks.push({
          _type: 'block',
          _key: Math.random().toString(36).substr(2, 9),
          style: 'normal',
          listItem: 'bullet',
          children: parseInlineFormatting(text)
        });
      }
    } else {
      // Regular paragraph - parse inline formatting
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'normal',
        children: parseInlineFormatting(trimmed)
      });
    }
  }
  
  return blocks;
}

// Function to parse inline formatting (bold, italic)
function parseInlineFormatting(text) {
  const children = [];
  let currentText = '';
  let i = 0;
  
  while (i < text.length) {
    // Check for bold (**text**)
    if (text[i] === '*' && text[i + 1] === '*') {
      // Save any accumulated text
      if (currentText) {
        children.push({
          _type: 'span',
          text: currentText,
          marks: []
        });
        currentText = '';
      }
      
      // Find the closing **
      i += 2;
      let boldText = '';
      while (i < text.length && !(text[i] === '*' && text[i + 1] === '*')) {
        boldText += text[i];
        i++;
      }
      
      if (boldText) {
        children.push({
          _type: 'span',
          text: boldText,
          marks: ['strong']
        });
      }
      
      i += 2; // Skip closing **
    } else {
      currentText += text[i];
      i++;
    }
  }
  
  // Add any remaining text
  if (currentText) {
    children.push({
      _type: 'span',
      text: currentText,
      marks: []
    });
  }
  
  return children.length > 0 ? children : [{ _type: 'span', text: '', marks: [] }];
}

async function fixAllPosts() {
  console.log('Starting content formatting fix...');
  
  try {
    // Get all posts
    const query = `*[_type == "post"]`;
    const posts = await client.fetch(query);
    
    console.log(`Found ${posts.length} posts to update`);
    
    for (const post of posts) {
      try {
        // Get the raw content text
        const rawContent = post.content.map(block => {
          if (block.children && block.children[0]) {
            return block.children[0].text || '';
          }
          return '';
        }).join('\n\n');
        
        // Convert to properly formatted Portable Text
        const formattedContent = markdownToPortableText(rawContent);
        
        // Update the post
        await client
          .patch(post._id)
          .set({ content: formattedContent })
          .commit();
        
        console.log(`✅ Fixed: ${post.title}`);
      } catch (error) {
        console.error(`❌ Error fixing ${post.title}:`, error.message);
      }
    }
    
    console.log('Content formatting fix complete!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllPosts();
