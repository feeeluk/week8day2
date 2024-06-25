import { chocolateBarsArray } from "@/utilities/array"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      {chocolateBarsArray.map( (chocolateBar) => {
        return(
          <div className="chocolateBar">
            <Link href={`/chocolate-bars/${chocolateBar.slug}`}>
            {chocolateBar.id}:{chocolateBar.name}
            </Link>
          </div>
        )

      })}
    </div>
  );
}
