const PlaceholderPage = ({ name }: { name: string }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 text-center min-h-[60vh]">
    <h1 className="text-5xl md:text-7xl font-serif mb-6">{name}</h1>
    <p className="text-xl text-ink/60 font-serif italic italic max-w-2xl mx-auto mb-12">
      This page is under publication. Our editors are meticulously crafting the content to meet our elite standards.
    </p>
    <div className="w-24 h-1 bg-gold mx-auto" />
  </div>
);

export default PlaceholderPage;
