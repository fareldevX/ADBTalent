import { useState, useRef, useEffect } from "react";
import { LuRotateCw, LuX, LuCheck } from "react-icons/lu";

function ImageCropModal({ imageFile, onCropComplete, onCancel }) {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [pan, setPan] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!imageFile) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        setPan({ x: 0, y: 0 });
        setScale(1);
        setRotation(0);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  useEffect(() => {
    if (!image || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 400;

    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(scale, scale);
    ctx.translate(pan.x, pan.y);

    const imgWidth = image.width;
    const imgHeight = image.height;
    ctx.drawImage(image, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);

    ctx.restore();

    // Draw circle overlay
    ctx.strokeStyle = "rgba(59, 130, 246, 0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 180, 0, Math.PI * 2);
    ctx.stroke();
  }, [image, scale, rotation, pan]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = (e.clientX - dragStart.x) * 0.5;
    const deltaY = (e.clientY - dragStart.y) * 0.5;

    setPan({
      x: pan.x + deltaX,
      y: pan.y + deltaY,
    });

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCrop = () => {
    const outputCanvas = document.createElement("canvas");
    const outputCtx = outputCanvas.getContext("2d");

    outputCanvas.width = 360;
    outputCanvas.height = 360;

    // Create circular clipping region
    outputCtx.beginPath();
    outputCtx.arc(180, 180, 180, 0, Math.PI * 2);
    outputCtx.clip();

    // Draw image directly without background
    outputCtx.save();
    outputCtx.translate(180, 180);
    outputCtx.rotate((rotation * Math.PI) / 180);
    outputCtx.scale(scale, scale);
    outputCtx.translate(pan.x, pan.y);

    const imgWidth = image.width;
    const imgHeight = image.height;
    outputCtx.drawImage(
      image,
      -imgWidth / 2,
      -imgHeight / 2,
      imgWidth,
      imgHeight,
    );

    outputCtx.restore();

    // Convert to blob
    outputCanvas.toBlob(
      (blob) => {
        onCropComplete(blob);
      },
      "image/png",
      1,
    );
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-800">
            Crop Profile Photo
          </h3>
          <button
            onClick={onCancel}
            className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <LuX size={20} />
          </button>
        </div>

        <div className="mb-6 flex justify-center">
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="border-2 border-slate-200 rounded-xl cursor-move"
          />
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-xs font-bold text-slate-600 mb-2 block">
              Zoom: {Math.round(scale * 100)}%
            </label>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleRotate}
            className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <LuRotateCw size={16} />
            Rotate
          </button>
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCrop}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <LuCheck size={16} />
            Crop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCropModal;
