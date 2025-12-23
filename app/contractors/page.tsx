'use client'

import { useState } from 'react'

// TypeScript interfaces for contractor tracking
interface Material {
  id: string
  name: string
  cost: number
  quantity: number
  unit: string
}

interface ProjectStage {
  id: string
  name: string
  contractor: string
  startDate: string
  endDate: string
  status: 'not-started' | 'in-progress' | 'completed' | 'delayed'
  materials: Material[]
  notes: string
}

interface Project {
  id: string
  name: string
  address: string
  stages: ProjectStage[]
}

// Predefined stage types
const STAGE_TYPES = [
  'Site Preparation',
  'Foundation',
  'Framing',
  'Roofing',
  'Plumbing',
  'Electrical',
  'HVAC',
  'Insulation',
  'Drywall',
  'Flooring',
  'Painting',
  'Finishing'
]

export default function ContractorTracking() {
  // Sample data - in production, this would come from a database
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      name: 'Residential Build - 123 Main St',
      address: '123 Main St, Culpeper, VA 22701',
      stages: [
        {
          id: '1',
          name: 'Foundation',
          contractor: 'Smith Construction',
          startDate: '2025-01-05',
          endDate: '2025-01-20',
          status: 'completed',
          materials: [
            { id: '1', name: 'Concrete', cost: 5000, quantity: 50, unit: 'cubic yards' },
            { id: '2', name: 'Rebar', cost: 1200, quantity: 100, unit: 'pieces' }
          ],
          notes: 'Foundation completed on schedule'
        },
        {
          id: '2',
          name: 'Framing',
          contractor: 'ABC Framing Co',
          startDate: '2025-01-22',
          endDate: '2025-02-10',
          status: 'in-progress',
          materials: [
            { id: '3', name: 'Lumber 2x4', cost: 3500, quantity: 500, unit: 'boards' },
            { id: '4', name: 'Lumber 2x6', cost: 2800, quantity: 300, unit: 'boards' },
            { id: '5', name: 'Nails/Fasteners', cost: 450, quantity: 10, unit: 'boxes' }
          ],
          notes: 'On track, weather permitting'
        },
        {
          id: '3',
          name: 'Roofing',
          contractor: 'Elite Roofing',
          startDate: '2025-02-12',
          endDate: '2025-02-25',
          status: 'not-started',
          materials: [
            { id: '6', name: 'Shingles', cost: 4200, quantity: 35, unit: 'squares' },
            { id: '7', name: 'Underlayment', cost: 800, quantity: 20, unit: 'rolls' },
            { id: '8', name: 'Flashing', cost: 600, quantity: 150, unit: 'feet' }
          ],
          notes: 'Scheduled after framing completion'
        }
      ]
    }
  ])

  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0])
  const [showAddStage, setShowAddStage] = useState(false)
  const [showAddMaterial, setShowAddMaterial] = useState<string | null>(null)
  const [editingStage, setEditingStage] = useState<ProjectStage | null>(null)

  // Form state for new stage
  const [newStage, setNewStage] = useState<Partial<ProjectStage>>({
    name: '',
    contractor: '',
    startDate: '',
    endDate: '',
    status: 'not-started',
    materials: [],
    notes: ''
  })

  // Form state for new material
  const [newMaterial, setNewMaterial] = useState<Partial<Material>>({
    name: '',
    cost: 0,
    quantity: 0,
    unit: ''
  })

  // Calculate total cost for a stage
  const calculateStageCost = (stage: ProjectStage) => {
    return stage.materials.reduce((total, material) => total + material.cost, 0)
  }

  // Calculate total project cost
  const calculateProjectCost = (project: Project) => {
    return project.stages.reduce((total, stage) => total + calculateStageCost(stage), 0)
  }

  // Add new stage
  const handleAddStage = () => {
    if (!selectedProject) return

    const stage: ProjectStage = {
      id: Date.now().toString(),
      name: newStage.name || '',
      contractor: newStage.contractor || '',
      startDate: newStage.startDate || '',
      endDate: newStage.endDate || '',
      status: newStage.status || 'not-started',
      materials: [],
      notes: newStage.notes || ''
    }

    const updatedProject = {
      ...selectedProject,
      stages: [...selectedProject.stages, stage]
    }

    setProjects(projects.map(p => p.id === selectedProject.id ? updatedProject : p))
    setSelectedProject(updatedProject)
    setNewStage({
      name: '',
      contractor: '',
      startDate: '',
      endDate: '',
      status: 'not-started',
      materials: [],
      notes: ''
    })
    setShowAddStage(false)
  }

  // Add material to stage
  const handleAddMaterial = (stageId: string) => {
    if (!selectedProject) return

    const material: Material = {
      id: Date.now().toString(),
      name: newMaterial.name || '',
      cost: newMaterial.cost || 0,
      quantity: newMaterial.quantity || 0,
      unit: newMaterial.unit || ''
    }

    const updatedProject = {
      ...selectedProject,
      stages: selectedProject.stages.map(stage =>
        stage.id === stageId
          ? { ...stage, materials: [...stage.materials, material] }
          : stage
      )
    }

    setProjects(projects.map(p => p.id === selectedProject.id ? updatedProject : p))
    setSelectedProject(updatedProject)
    setNewMaterial({ name: '', cost: 0, quantity: 0, unit: '' })
    setShowAddMaterial(null)
  }

  // Delete stage
  const handleDeleteStage = (stageId: string) => {
    if (!selectedProject) return

    const updatedProject = {
      ...selectedProject,
      stages: selectedProject.stages.filter(stage => stage.id !== stageId)
    }

    setProjects(projects.map(p => p.id === selectedProject.id ? updatedProject : p))
    setSelectedProject(updatedProject)
  }

  // Delete material
  const handleDeleteMaterial = (stageId: string, materialId: string) => {
    if (!selectedProject) return

    const updatedProject = {
      ...selectedProject,
      stages: selectedProject.stages.map(stage =>
        stage.id === stageId
          ? { ...stage, materials: stage.materials.filter(m => m.id !== materialId) }
          : stage
      )
    }

    setProjects(projects.map(p => p.id === selectedProject.id ? updatedProject : p))
    setSelectedProject(updatedProject)
  }

  // Update stage status
  const handleUpdateStatus = (stageId: string, status: ProjectStage['status']) => {
    if (!selectedProject) return

    const updatedProject = {
      ...selectedProject,
      stages: selectedProject.stages.map(stage =>
        stage.id === stageId ? { ...stage, status } : stage
      )
    }

    setProjects(projects.map(p => p.id === selectedProject.id ? updatedProject : p))
    setSelectedProject(updatedProject)
  }

  // Status color mapping
  const getStatusColor = (status: ProjectStage['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-500'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-500'
      case 'delayed':
        return 'bg-red-100 text-red-800 border-red-500'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-500'
    }
  }

  if (!selectedProject) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Project Selected</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-4">
            <a
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              ← Back to Home
            </a>
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contractor Tracking Platform</h1>
              <p className="mt-2 text-lg text-gray-600">{selectedProject.name}</p>
              <p className="text-sm text-gray-500">{selectedProject.address}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Total Project Cost</p>
              <p className="text-3xl font-bold text-blue-600">
                ${calculateProjectCost(selectedProject).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Timeline Overview */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Project Timeline</h2>
            <button
              onClick={() => setShowAddStage(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              + Add Stage
            </button>
          </div>

          {/* Timeline Progress Bar */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm font-medium text-gray-700">
                {selectedProject.stages.filter(s => s.status === 'completed').length} / {selectedProject.stages.length} Stages
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full transition-all"
                style={{
                  width: `${(selectedProject.stages.filter(s => s.status === 'completed').length / selectedProject.stages.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

          {/* Stages List */}
          <div className="space-y-4">
            {selectedProject.stages.map((stage, index) => (
              <div key={stage.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Stage Header */}
                <div className={`p-6 border-l-4 ${getStatusColor(stage.status).split(' ')[2]}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-semibold text-gray-700">
                          #{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{stage.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(stage.status)}`}>
                          {stage.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <p className="text-gray-700">
                        <span className="font-medium">Contractor:</span> {stage.contractor}
                      </p>
                      <p className="text-gray-600 text-sm mt-1">
                        {stage.startDate} to {stage.endDate}
                      </p>
                      {stage.notes && (
                        <p className="text-gray-600 text-sm mt-2 italic">{stage.notes}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Stage Cost</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${calculateStageCost(stage).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Status Update Buttons */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => handleUpdateStatus(stage.id, 'not-started')}
                      className={`px-3 py-1 rounded text-sm ${stage.status === 'not-started' ? 'bg-gray-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                      Not Started
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(stage.id, 'in-progress')}
                      className={`px-3 py-1 rounded text-sm ${stage.status === 'in-progress' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
                    >
                      In Progress
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(stage.id, 'completed')}
                      className={`px-3 py-1 rounded text-sm ${stage.status === 'completed' ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(stage.id, 'delayed')}
                      className={`px-3 py-1 rounded text-sm ${stage.status === 'delayed' ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700 hover:bg-red-200'}`}
                    >
                      Delayed
                    </button>
                  </div>

                  {/* Materials Section */}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-gray-900">Materials</h4>
                      <button
                        onClick={() => setShowAddMaterial(stage.id)}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                      >
                        + Add Material
                      </button>
                    </div>

                    {stage.materials.length > 0 ? (
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-2 px-2 font-medium text-gray-700">Material</th>
                              <th className="text-right py-2 px-2 font-medium text-gray-700">Quantity</th>
                              <th className="text-right py-2 px-2 font-medium text-gray-700">Cost</th>
                              <th className="text-center py-2 px-2 font-medium text-gray-700">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {stage.materials.map(material => (
                              <tr key={material.id} className="border-b last:border-0">
                                <td className="py-2 px-2 text-gray-900">{material.name}</td>
                                <td className="py-2 px-2 text-right text-gray-700">
                                  {material.quantity} {material.unit}
                                </td>
                                <td className="py-2 px-2 text-right text-gray-900 font-medium">
                                  ${material.cost.toLocaleString()}
                                </td>
                                <td className="py-2 px-2 text-center">
                                  <button
                                    onClick={() => handleDeleteMaterial(stage.id, material.id)}
                                    className="text-red-600 hover:text-red-800 text-xs"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">No materials added yet</p>
                    )}

                    {/* Add Material Form */}
                    {showAddMaterial === stage.id && (
                      <div className="mt-4 p-4 bg-gray-50 rounded border">
                        <h5 className="font-medium text-gray-900 mb-3">Add New Material</h5>
                        <div className="grid grid-cols-2 gap-3">
                          <input
                            type="text"
                            placeholder="Material Name"
                            value={newMaterial.name}
                            onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                            className="px-3 py-2 border rounded text-sm"
                          />
                          <input
                            type="number"
                            placeholder="Cost"
                            value={newMaterial.cost || ''}
                            onChange={(e) => setNewMaterial({ ...newMaterial, cost: parseFloat(e.target.value) || 0 })}
                            className="px-3 py-2 border rounded text-sm"
                          />
                          <input
                            type="number"
                            placeholder="Quantity"
                            value={newMaterial.quantity || ''}
                            onChange={(e) => setNewMaterial({ ...newMaterial, quantity: parseFloat(e.target.value) || 0 })}
                            className="px-3 py-2 border rounded text-sm"
                          />
                          <input
                            type="text"
                            placeholder="Unit (e.g., cubic yards)"
                            value={newMaterial.unit}
                            onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
                            className="px-3 py-2 border rounded text-sm"
                          />
                        </div>
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => handleAddMaterial(stage.id)}
                            className="px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                          >
                            Add Material
                          </button>
                          <button
                            onClick={() => {
                              setShowAddMaterial(null)
                              setNewMaterial({ name: '', cost: 0, quantity: 0, unit: '' })
                            }}
                            className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded hover:bg-gray-400"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Delete Stage Button */}
                  <div className="mt-4 pt-4 border-t">
                    <button
                      onClick={() => handleDeleteStage(stage.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Delete Stage
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Stage Modal */}
        {showAddStage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Add New Stage</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stage Name</label>
                  <select
                    value={newStage.name}
                    onChange={(e) => setNewStage({ ...newStage, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a stage type...</option>
                    {STAGE_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contractor</label>
                  <input
                    type="text"
                    value={newStage.contractor}
                    onChange={(e) => setNewStage({ ...newStage, contractor: e.target.value })}
                    placeholder="Contractor name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="date"
                      value={newStage.startDate}
                      onChange={(e) => setNewStage({ ...newStage, startDate: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="date"
                      value={newStage.endDate}
                      onChange={(e) => setNewStage({ ...newStage, endDate: e.target.value })}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={newStage.status}
                    onChange={(e) => setNewStage({ ...newStage, status: e.target.value as ProjectStage['status'] })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="not-started">Not Started</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="delayed">Delayed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    value={newStage.notes}
                    onChange={(e) => setNewStage({ ...newStage, notes: e.target.value })}
                    placeholder="Additional notes..."
                    rows={3}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleAddStage}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Stage
                </button>
                <button
                  onClick={() => {
                    setShowAddStage(false)
                    setNewStage({
                      name: '',
                      contractor: '',
                      startDate: '',
                      endDate: '',
                      status: 'not-started',
                      materials: [],
                      notes: ''
                    })
                  }}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2025 PropCode - Contractor Tracking Platform
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
