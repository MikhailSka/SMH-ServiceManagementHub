import { useState } from 'react'
import { useEffect } from 'react'
import { AxiosError } from 'axios'
import axios from 'axios'

import { IDevice } from '../models/IDevice'
import { MuiTableContext } from 'context/mui_table_context/components/MuiTableContext'

export function useDevices() {
    const [devices, setDevices] = useState<Array<IDevice>>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    async function fetchDevices() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get(`http://127.0.0.1:5000/device/get`)
            setDevices(response.data)
        } catch (e: unknown) {
            const error = e as AxiosError

            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    async function deleteDevice(id: string) {
        try {
            await axios.delete(`http://127.0.0.1:5000/device/delete/${id}`);
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        } finally {
            fetchDevices()
        }
    };

    async function addDevice(data: []) {
        try {
            await axios.post(`http://127.0.0.1:5000/device/post`, data);
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        } finally {
            fetchDevices()
        }
    }

    async function updateDevice(data: any, id: string) {
        try {
            await axios.put(`http://127.0.0.1:5000/device/update/${id}`, data);
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
        } finally {
            fetchDevices()
        }

    }

    useEffect(() => {
        fetchDevices()
    }, [])

    return { devices, error, loading, deleteDevice, addDevice, updateDevice }
}