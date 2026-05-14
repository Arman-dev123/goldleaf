import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description?: string;
  schema?: object;
}

export default function SEO({ title, description, schema }: SEOProps) {
  const location = useLocation();
  const fullTitle = `${title} | Goldleaf Ghostwriting Agency`;
  const defaultDesc = "Goldleaf is a premium ghostwriting and publishing agency dedicated to crafting elite books and memoirs with a luxury publishing feel.";

  useEffect(() => {
    document.title = fullTitle;
    
    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description || defaultDesc);

    // Schema Markup
    const existingSchema = document.getElementById('json-ld-schema');
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [fullTitle, description, schema, location.pathname]);

  return null;
}
