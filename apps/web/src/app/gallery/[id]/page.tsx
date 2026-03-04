/** @format */

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return (
    <img
      src={`https://picsum.photos/800/600?random=${photoId}`}
      className="h-full w-full rounded-lg object-cover"
    />
  );
}
