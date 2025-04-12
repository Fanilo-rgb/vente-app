"use client"
import { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";

const TicketComponent = ({ ticketData }) => {
  const dollarValue = 3600;
  const { _id, name, number_card, items, createdAt } = ticketData;
  const componentRef = useRef();
  const router = useRouter();

  const generatePDF = async () => {
    const input = componentRef.current;

    const canvas = await html2canvas(input, {
      scale: 2,
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    router.push("/dashboard/purchase");

    const blobUrl = URL.createObjectURL(pdf.output("blob"));
    window.open(blobUrl);
  };

  const totalAriary = items.reduce(
    (sum, item) => sum + item.price * dollarValue * item.quantity,
    0
  );

  const totalDollar = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={generatePDF}
        className="mb-4 px-4 py-2 rounded-md text-sm transition"
        style={{
          backgroundColor: "#2563eb", // bg-blue-600
          color: "#ffffff", // text-white
        }}
      >
        Télécharger PDF
      </button>

      <div
        ref={componentRef}
        className="p-6 w-[350px] rounded-xl shadow-md flex flex-col gap-4"
        style={{
          backgroundColor: "#ffffff", // bg-white
          color: "#1f2937", // text-gray-800
        }}
      >
        <h1>MAGLIFE</h1>
        <div className="text-xs">
          <p>
            {new Date(createdAt).toLocaleString("fr-FR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>
          <p>Shop Ambodimita</p>
        </div>

        <hr style={{ borderTop: "1px dashed #cbd5e1" }} />

        <div className="text-sm font-semibold text-center">
          <h4>{name}</h4>
          <h4 className="tracking-widest font-bold text-base mt-1">
            ID : {number_card}
          </h4>
        </div>

        <hr />

        <ul className="flex flex-col gap-2 text-sm">
          {items.map((item) => {
            const ariary = item.price * dollarValue;
            return (
              <li key={item._id}>
                <p className="font-medium">{item.name}</p>
                <div className="flex justify-between text-xs pl-3">
                  <span>
                    {ariary.toLocaleString("fr-MG")} x {item.quantity}
                  </span>
                  <span>
                    {(ariary * item.quantity).toLocaleString("fr-MG", {
                      maximumFractionDigits: 0,
                    })}{" "}
                    Ar
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <hr style={{ borderTop: "1px dashed #cbd5e1" }} />

        <div className="text-sm flex justify-between font-medium">
          <span>Total :</span>
          <span>{totalAriary.toLocaleString("fr-MG")} Ar</span>
        </div>

        <div className="text-sm flex justify-between font-medium">
          <span>BV :</span>
          <span>{totalDollar.toFixed(2)} $</span>
        </div>

        <p
          className="text-center text-xs mt-2 italic"
          style={{ color: "#15803d" }} // text-green-700
        >
          Payé et livré
        </p>
        <div className="flex justify-center">
          <QRCodeSVG
            value={`http://localhost:3000/dashboard/tickets/${_id}`}
            size={150}
            level="L"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
