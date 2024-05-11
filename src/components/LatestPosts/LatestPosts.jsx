
import { Tabs } from "antd";



const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Latest",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Popular",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Friends",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Following",
    children: "Content of Tab Pane 3",
  },
  {
    key: "5",
    label: "Saved",
    children: "Content of Tab Pane 3",
  },
];

export const LatestPosts = () => (
  <>
    <h2 className="text-2xl font-bold text-center my-8">
      Latest Posts
    </h2>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </>
);

