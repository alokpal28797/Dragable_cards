import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Card from 'react-bootstrap/Card';

export function SortableItem(props) {
    console.log("🚀 ~ SortableItem ~ props:", props)
    // props.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: props.id });
        console.log("🚀 ~ SortableItem ~ props.id:", props.id)
        console.log("🚀 ~ SortableItem ~ transform:", transform)
        console.log("🚀 ~ SortableItem ~ listeners:", listeners)
        console.log("🚀 ~ SortableItem ~ attributes:", attributes)

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <div style={{ display: 'flex' }}>
                <Card body className="m-3">{props.id}</Card>
            </div>
        </div>
    )
}


