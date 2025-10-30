import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Fuse from "fuse.js";
import L from "leaflet";
import districtsData from "../../../public/districtData.json";
// Fix default marker icon issue in Leaflet + React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});



const CoveragePage = () => {
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState(districtsData);

    // Setup Fuse.js for fuzzy search
    const fuse = new Fuse(districtsData, {
        keys: ["district"],
        threshold: 0.4, // adjust sensitivity
    });

    useEffect(() => {
        if (!search) {
            setFiltered(districtsData);
        } else {
            const results = fuse.search(search);
            setFiltered(results.map((r) => r.item));
        }
    }, [search]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-2">
                We are available in {districtsData.length} districts
            </h1>

            <input
                type="text"
                placeholder="Search for a district..."
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className="input input-bordered w-full max-w-md mb-4 text-black"
            />

            <MapContainer
                center={[23.685, 90.3563]}
                zoom={7}
                style={{ height: "600px", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />

                {filtered.map((district, idx) => (
                    <Marker
                        key={idx}
                        position={[district.latitude, district.longitude]}
                    >
                        <Popup>
                            <strong>{district.district}</strong> <br />
                            Region: {district.region} <br />
                            City: {district.city} <br />
                            Covered Areas: {district.covered_area.join(", ")} <br />
                            <img
                                src={district.flowchart}
                                alt={`${district.district} flowchart`}
                                style={{ width: "100%", marginTop: "5px" }}
                            />
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default CoveragePage;
