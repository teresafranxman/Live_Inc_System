import { ItemsStart, ItemsCenter, ItemsEnd } from "./items";

export const DisplayLinks = () => {
    return (
        <>
            <ul>
                {ItemsStart.map((item) => (
                    <li key={item.key}>{item.label}</li>
                ))}
            </ul>
            <ul>
                {ItemsCenter.map((item) => (
                    <li key={item.key}>{item.label}</li>
                ))}
            </ul>
            <ul>
                {ItemsEnd.map((item) => (
                    <li key={item.key}>{item.label}</li>
                ))}
            </ul>
        </>
    );
};