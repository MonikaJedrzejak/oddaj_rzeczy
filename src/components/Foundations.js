import React from "react";

export default function Foundations({ table }) {
	return (
		<>
			<p className="org-desc">
				W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
				współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
				potrzebują.
			</p>
			<div div className="org-table">
				{table.map(({ name, description, stuff }, idx) => (
					<tr className="org-table-row">
						<td className="org-table-col">
							<p className="table-name">{name}</p>
							<p className="table-desc">{description}</p>
						</td>
						<td className="org-table-col">
							<p className="table-stuff">{stuff}</p>
						</td>
					</tr>
				))}
			</div>
			<div>
				padd
			</div>
		</>
	);
}
