export default async (req, res) => {
  // on-demand incremental static Regeneration
  await res.unstable_revalidate('/');//Força revalidação

  res.status(200).json({ name: 'Hello, World!' });
}