export default function DiskContainer() {
  const diskData = [
    {
      img: "./images/Disks/acnh-disk.jpg",
      id: "acnh",
      name: "2AM Bg Music",
      artist: "Animal Crossing New Horizons",
    },
    {
      img: "./images/Disks/yhx-disk.jpg",
      id: "yhx",
      name: "For You",
      artist: "Yan Haoxiang",
    },
    {
      img: "./images/Disks/piano-disk.png",
      id: "piano",
      name: "2AM Bg Music",
      artist: "Animal Crossing New Horizons",
    },
    {
      img: "./images/Disks/duck-disk.jpg",
      id: "duck",
      name: "Duck Alarm",
      artist: "IOS",
    },
  ];

  return (
    <div className="ml-[1.7vw] flex flex-wrap w-[10.125vw] gap-[1vw]">
      {diskData.map((item, index) => (
        <Disk item={item} key={index} />
      ))}
    </div>
  );
}

function Disk({
  item,
}: {
  item: { img: string; id: string; name: string; artist: string };
}) {
  return (
    <div className="w-[4.4vw] flex items-center justify-center relative aspect-square rounded-[50%] overflow-hidden">
      <img src={item.img} alt="disk" />
      <div className="absolute w-[1vw] bg-[#101010] aspect-square rounded-[50%]" />
    </div>
  );
}
