import { ReactFlow, Background, Node} from '@xyflow/react';
import {useState } from 'react';
import 'reactflow/dist/style.css';
import PersonNode from './components/PersonNode';
import Modal from './components/Modal';

const nodeTypes = {
  personNode: PersonNode,
};

//Dummy Nodes
const nodes = [
  {
    id: '1',
    type: 'personNode',
    position: { x: 100, y: 100 },
    data: {
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'ABC',
      life_period: "23-24",
    },
  },
  {
    id: '2',
    type: 'personNode',
    position: { x: 300, y: 300 },
    data: {
      image: 'https://randomuser.me/api/portraits/men/44.jpg',
      name: 'DEF',
      life_period: "23-24",
    },
  },
];

//NOT WORKING?
const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
  },
];

export default function App() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  return (
    <div style={{width:'100vw', height:'100vh'}}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        snapGrid={[20, 20]}
        fitView
        onNodeClick={(_event, node) => {
          setSelectedNode(node);
        }}
      >
        <Background />
      </ReactFlow>
      {selectedNode && (
        <Modal node={selectedNode} onClose={() => setSelectedNode(null)} />
      )}
    </div>
  );
}
