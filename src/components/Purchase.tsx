import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { print } from "../../utils/print";

interface Row {
  itemDescription: string;
  qty: string;
  unitDiscountedRate: string;
  totalDiscountedRate: string;
}

export const Purchase = () => {
  const [rows, setRows] = useState<Row[]>([
    {
      itemDescription: "",
      qty: "",
      unitDiscountedRate: "",
      totalDiscountedRate: "",
    },
  ]);

  const handleInputChange = (
    index: number,
    field: keyof Row,
    value: string
  ) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        itemDescription: "",
        qty: "",
        unitDiscountedRate: "",
        totalDiscountedRate: "",
      },
    ]);
  };

  const removeRow = (index: number) => {
    if (rows.length === 1) return; // prevent removing last row if you want
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  const handlePrint = () => {
    var html = print(rows);
    var printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow?.document.write(html);
    printWindow?.document.close();
    printWindow?.focus();
    printWindow?.print();
    printWindow?.close();
  }

  return (
    <>
      <div className="p-4 w-screen">
        <div className="text-4xl font-bold text-center py-4">Purchase</div>
        <div className="flex justify-center">
          <Table className={"border"}>
            <TableHeader>
              <TableRow>
                <TableHead>Sr. No.</TableHead>
                <TableHead>Item Description</TableHead>
                <TableHead>Qty.</TableHead>
                <TableHead>Unit Discounted Rate in INR</TableHead>
                <TableHead>Total Discounted Rate in INR</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="Enter Item Description"
                      value={row.itemDescription}
                      onChange={(e) =>
                        handleInputChange(idx, "itemDescription", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Textarea
                      placeholder="Enter Quantity"
                      value={row.qty}
                      onChange={(e) => handleInputChange(idx, "qty", e.target.value)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="Enter Unit Discounted Rate"
                      value={row.unitDiscountedRate}
                      onChange={(e) =>
                        handleInputChange(idx, "unitDiscountedRate", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      placeholder="Enter Total Discounted Rate"
                      value={row.totalDiscountedRate}
                      onChange={(e) =>
                        handleInputChange(idx, "totalDiscountedRate", e.target.value)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="destructive" onClick={() => removeRow(idx)}>
                      Remove
                    </Button>
                    {idx === rows.length - 1 && (
                      <Button onClick={addRow} className="ml-2">
                        Add +
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center py-4">
          <Button onClick={handlePrint}>Print</Button>
        </div>
      </div>
    </>
  );
};
