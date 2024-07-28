"use client"

import { useRouter } from "next/navigation";
import styles from "../styles/list.module.css"
import Link from "next/link";

interface IListProps {
    id: string;
    list_name: string;
}

export default function List({ id, list_name }:IListProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/list/${id}`);
    };

    return (
        
            <Link href={`/list/${id}`}>
                <li onClick={onClick} className={styles.list}>
                    {list_name} ➡️
                </li>
            </Link>
        
    )
}