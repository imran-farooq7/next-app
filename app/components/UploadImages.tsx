"use client";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const UploadImages = () => {
	const [publicId, setPublicId] = useState("");
	return (
		<>
			{publicId && (
				<CldImage src={publicId} alt={publicId} width={"300"} height={"180"} />
			)}
			<CldUploadWidget
				uploadPreset="raxjomcd"
				onSuccess={({ event, info }) => {
					if (event === "success") {
						setPublicId(info?.public_id);
					}
				}}
			>
				{({ open }) => (
					<button
						className="bg-red-600 text-white p-4 rounded-lg"
						onClick={() => open()}
					>
						Upload
					</button>
				)}
			</CldUploadWidget>
		</>
	);
};
export default UploadImages;
