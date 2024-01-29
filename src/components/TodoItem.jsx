export default function TodoItem() {
  return (
    <>
      <tr>
        <th className="p-0">
          <input
            type="checkbox"
            checked="checked"
            className="checkbox border-secondary-content checkbox-primary"
          />
        </th>
        <td className="p-2 max-w-xs break-all">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro nisi, blanditiis necessitatibus quasi impedit quae.
        </td>
      </tr>
    </>
  );
}
