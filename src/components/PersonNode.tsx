import { NodeProps, Node } from '@xyflow/react';
 
export type PersonNode = Node<
  {
    image: string,
    name: string,
    life_period: string
  },
  'person'
>;
 
export default function PersonNode(props: NodeProps<PersonNode>) {
  const {image, name, life_period } = props.data;
 
  return (
    <div className="bg-white border-2 border-gray-300 shadow-md rounded-xl p-3 w-35 text-center">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mx-auto object-cover mb-2"/>
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{life_period}</p>
    </div>
  );

}