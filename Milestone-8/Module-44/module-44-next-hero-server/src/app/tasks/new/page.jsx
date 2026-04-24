
'use client'
import { newTaskAction } from "@/lib/actions";
import { Input, Label, TextField, Select, ListBox, Modal, Button, Form, FieldError } from "@heroui/react";


const NewTask = () => {
    return (
        <div className="w-1/2 mx-auto">
            <h2 className="text-5xl">Add a New </h2>
            <div>
                <Form action={newTaskAction} className="flex flex-col gap-4">
                    <TextField
                        isRequired
                        minLength={5}
                        validate={(value) => {
                            if (value.length < 5) {
                                return "Title must be at least 8 characters or longer";
                            }
                        }}
                     className="w-full" name="title" type="text">
                        <Label>Title</Label>
                        <Input placeholder="Enter your Task Title" />
                        <FieldError />
                    </TextField>
                    <TextField className="w-full" name="discription" type="text">
                        <Label>Task Description</Label>
                        <Input placeholder="Enter your Task Description" />
                    </TextField>
                    <Select name="priority" className="w-[256px]" placeholder="Select one">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="low" textValue="Low">
                                    Low
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="medium" textValue="Medium">
                                    Medium
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="high" textValue="High">
                                    High
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>



                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <Select name="status" className="w-[256px]" placeholder="Select one">
                        <Label>status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="pending" textValue="Pending">
                                    Pending
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="Progress" textValue="Progress">
                                    Progress
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                                <ListBox.Item id="completed" textValue="completed">
                                    completed
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>



                            </ListBox>
                        </Select.Popover>
                    </Select>

                    <TextField className="w-full" name="assignedTo">
                        <Label>AssignedTo</Label>
                        <Input placeholder="Enter your Task Assigned To" />
                    </TextField>
                    <Modal.Footer>
                        <Button slot="close" variant="secondary">
                            Cancel
                        </Button>
                        <Button slot="close" type="submit" >Submit Task</Button>
                    </Modal.Footer>
                </Form>
            </div>
        </div>
    );
};

export default NewTask;