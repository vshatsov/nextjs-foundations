/** @format */

import { Modal } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return (
    <Modal>
      <img
        src={`https://picsum.photos/800/600?random=1`}
        className="h-full w-full rounded-lg object-cover"
      />
    </Modal>
  );
}
