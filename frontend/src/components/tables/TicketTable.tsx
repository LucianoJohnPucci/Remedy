"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { Ticket } from "@/utils/mockTickets";
import { Table, Input } from "antd";
import { useMemo, useState } from "react";

interface Props {
  data: Ticket[];
}

export default function TicketTable({ data }: Props) {
  const [globalFilter, setGlobalFilter] = useState("");

  const filteredData = useMemo(() => {
    if (!globalFilter) return data;
    return data.filter((t) =>
      t.title.toLowerCase().includes(globalFilter.toLowerCase())
    );
  }, [data, globalFilter]);

  const columns = useMemo<ColumnDef<Ticket>[]>(
    () => [
      { accessorKey: "id", header: "#" },
      { accessorKey: "title", header: "Title" },
      { accessorKey: "status", header: "Status" },
      { accessorKey: "priority", header: "Priority" },
      { accessorKey: "requester", header: "Requester" },
      { accessorKey: "createdAt", header: "Created" },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const Row = ({ index, style }: { index: number; style: any }) => {
    const row = table.getRowModel().rows[index];
    return (
      <div
        style={{ ...style, display: "flex" }}
        className={index % 2 ? "bg-gray-50" : "bg-white"}
      >
        {row.getVisibleCells().map((cell) => (
          <div
            key={cell.id}
            style={{ flex: 1, padding: "0.5rem" }}
            className="truncate"
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col">
      <Input.Search
        placeholder="Search titles..."
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="mb-2"
      />
      <div style={{ flex: 1 }}>
        <AutoSizer>
          {({ height, width }) => (
            <div style={{ width, height, overflow: "auto" }}>
              <div style={{ display: "flex", fontWeight: 600 }}>
                {table.getHeaderGroups()[0].headers.map((header) => (
                  <div
                    key={header.id}
                    style={{ flex: 1, padding: "0.5rem" }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                ))}
              </div>
              <List
                height={height - 32}
                itemCount={table.getRowModel().rows.length}
                itemSize={35}
                width={width}
              >
                {Row}
              </List>
            </div>
          )}
        </AutoSizer>
      </div>
    </div>
  );
}
